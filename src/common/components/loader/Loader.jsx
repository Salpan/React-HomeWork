import "./styles.css";

export const Loader = ({ loading = false }) => {
    if (!loading) {
        return null;
    }

    return <span className="loader" />;
};
