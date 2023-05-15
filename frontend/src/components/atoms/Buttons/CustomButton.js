// CustomButton component renders a button with a specific style and color variant,
// depending on the properties that are passed.
const CustomButton = ({
                          text,
                          variant = "default",
                          style = {},
                          className = "",
                          ...props
                      }) => {
    let backgroundColor, hoverBackgroundColor;

    switch (variant) {
        case "success":
            backgroundColor = "green";
            hoverBackgroundColor = "darkgreen";
            break;
        case "error":
            backgroundColor = "red";
            hoverBackgroundColor = "blue";
            break;
        default:
            backgroundColor = "gray";
            hoverBackgroundColor = "darkgray";
            break;
    }

    // Defaul button style
    const buttonStyle = {
        backgroundColor,
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        height: "50%",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        ":hover": {
            backgroundColor: hoverBackgroundColor,
        },
        ...style, // Merge any additional styles passed in
    };

    return (
        <button className={className} style={buttonStyle} {...props}>
            {text}
        </button>
    );
};

export default CustomButton;
