export const Loader = ({ loading }) => {
    if (!loading) {
        return null
    }

    return (
        <span className="loader" />
    )
}