const a11yKeyDown = (action) => {
    return (event) => {
        if (event.key === "Enter" || event.key === " ") {
            action();
            event.preventDefault();
        }
    }
}

export default a11yKeyDown;