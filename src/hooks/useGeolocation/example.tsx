import { GeolocationMode, useGeolocation } from "./useGeolocation";

const Example = () => {
    const { position, positionError } = useGeolocation(GeolocationMode.SINGLE);
    // const { position, error, locationHistory } = useGeolocation(GeolocationMode.WATCH);
    return(
        <div>
            {position}
        </div>
    )
}