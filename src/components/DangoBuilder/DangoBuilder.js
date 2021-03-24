import classes from "./DangoBuilder.module.css";
import DangoControls from "./DangoControls/DangoControls";
import DangoPreview from "./DangoPreview/DangoPreview";

const DangoBuilder = () => {
    return ( 
        <div className = {classes.DangoBuilder}>
            <DangoPreview />
            <DangoControls />
        </div>
    );
}
 
export default DangoBuilder;