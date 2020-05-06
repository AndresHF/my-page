type BackPressProps = {
 action: Function;
}


const BackPress: React.FC<BackPressProps> = ({action}) => {

return (
    <button
        onClick={() => action()}
    >
        {"< Back"}
    </button>
)
}
export default BackPress