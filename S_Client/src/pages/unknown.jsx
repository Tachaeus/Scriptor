export default function Unknown() {
    const unknownStyles = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        lineHeight: 1.5,
        padding: "20px",
        positon: "relative",
        top: "50%",
        left: "-20%",
        backgroundPosition: "relative",
        backgroundSize: "cover",
        placeItems: "center",
        transform: "translateY(30%)",
        color: " color-mix(in xyz, #eee 60%, #333 12%)"
    }

    const bigX = {
        padding: "20px",
        positon: "relative",
        top: "50%",
        left: "-20%",
        fontSize: "180px",
        border: "tansparent",
        width: "100%",
        height: "100%",
        zIndex: -1,
        color: "red",
        transform: "translateY(-65%)",
    }

return (
    <div style={unknownStyles}>
        <h1>404 ● Not Found</h1>
        <h2>What are you doing here</h2>
        <div style={bigX}>✖</div>
    </div>
)
}