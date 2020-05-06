import { capitalize } from "../../utils/strings"
import { BACKGROUND_STATE } from "../../../pages";

type SketchPickerProps = {
    onChange: Function;
}

const SKETCHES = ["MATRIX", "PARTICLES"] as Array<BACKGROUND_STATE>;

const SketchPicker: React.FC<SketchPickerProps> = ({ onChange }) => {
    return (
        <div className="sketch__picker--container">
            <select
                onChange={(e) => onChange(e.target.value)}
                className="sketch__picker"
            >
                {SKETCHES.map(sketch => (
                    <option 
                        key={sketch}
                        value={sketch}
                    >
                        {capitalize(sketch)}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default SketchPicker