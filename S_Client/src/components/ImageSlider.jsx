import { useState } from "react";

function ImageSlider({ slides }) {
    // A hook to difine slider indices
    const [currentIdx, setCurrentIdx] = useState(0);

    // Styling for the container holding the cards
    const sliderStyles = {
        height: "100%",
        position: "relative",
        margin: "10px"
    }

    // Styling for the slider-change arrows
    // Left
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        left: "15px",
        transform: "translate(0, -50%)",
        fontSize: "45px",
        color: "#254791",
        zIndex: 1,
        cursor: "pointer",
    }

    // Right
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        right: "15px",
        transform: "translate(0, -50%)",
        fontSize: "45px",
        color: "#254791",
        zIndex: 1,
        cursor: "pointer",
    }

    // Styling for the actual cards
    const slideStyles = {
        width: "100%",
        height: "90%",
        borderRadius: "10px",
        backgroundPosition: "relative",
        backgroundSize: "cover",
        backgroundImage: `image-set(url(${slides[currentIdx].url}))`,
        alignContent: "center",
        justifyContent: "center",
    }

    const contentStyles = {
        position: "relative",
        left: "20%",
        maxWidth: "60%",
        height: "auto",
        padding: "4px",
        textWrap: "wrap",
        color: "#254791",
        WebkitTextStroke: "0.2px white",
        fontSize: "18px",
        
    }

    // Slides to the previous image
    const toPrev = () => {
        const isFirstIdx = currentIdx === 0
        const newIdx = isFirstIdx ? slides.length - 1 : currentIdx - 1;
        setCurrentIdx(newIdx)
    }

    // Slides to the next image
    const toNext = () => {
        const isLastIdx = currentIdx === slides.length - 1
        const newIdx = isLastIdx ? 0 : currentIdx + 1
        setCurrentIdx(newIdx)
    }

    // Styling the container holding  the clickable dots
    const shortCutsContainerStyles = {
        display: "flex",
        justifyContent: "center",
    }

    // Styling the clickable dots
    const shortCutStyles = {
        cursor: "pointer"
    }

    // Jumps to the specific image corresponding to the dot's position
    const jumpToSlide = (slideIdx) => {
        setCurrentIdx(slideIdx)
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={toPrev}>‹</div>
            <div style={rightArrowStyles} onClick={toNext}>›</div>
            <div style={slideStyles}>
                <div style={contentStyles}>{slides[currentIdx].content}</div>
            </div>
            <div style={shortCutsContainerStyles}>
                {slides.map((slide, slideIdx) => (
                    <div key={slideIdx} style={shortCutStyles} onClick={() => jumpToSlide(slideIdx)}>
                        ●
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider;