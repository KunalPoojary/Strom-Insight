import React, {useEffect, useRef, useState} from 'react';
import {Map, LayersControl, TileLayer, Marker, Popup} from "react-windy-leaflet";

const ReportMap = () => {

    const [state, setState] = useState({
        lat: 0,
        lng: 0,
        zoom: 1,

        pickerOpen: true,
        pickerLat: -23,
        pickerLng: -42,

        overlay: "wind"
    });
    const position = [state.lat, state.lng];
    const { BaseLayer, Overlay } = LayersControl;

    useEffect(() => {
        let interval = setInterval(() => {
            setState(s => ({
                ...s,
                pickerLat: state.pickerLat + 1,
                pickerLng: state.pickerLng + 1
            }));
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            setState(s => ({...s, pickerOpen: false}));
        }, 6000);

        setTimeout(() => {
            setState(s => ({...s, pickerOpen: true, pickerLat: 25, pickerLng: 40}));
        }, 7000);
    }, [])

    return (
        <div>


            <Map
                className="leaflet-container"
                style={{width: "100%", height: "96vh"}}
                windyKey={"KLq"}
                windyLabels={false}
                windyControls={false}
                overlay={state.overlay}
                overlayOpacity={0.5}
                particlesAnim={false}
                zoom={state.zoom}
                center={[state.lat, state.lng]}
                removeWindyLayers
                onWindyMapReady={() => {
                    console.log("Windy Map Loaded!");
                }}
                pickerPosition={
                    state.pickerOpen
                        ? [state.pickerLat, state.pickerLng]
                        : null
                }
                onPickerOpened={latLng => console.log("Picker Opened", latLng)}
                onPickerMoved={latLng => {
                    console.log("Picker Moved", latLng);
                    this.setState({
                        pickerLat: latLng.lat,
                        pickerLng: latLng.lon
                    });
                }}
                onPickerClosed={() => console.log("Picker Closed")}
                mapElements={
                    <React.Fragment>
                        <LayersControl>
                            <BaseLayer checked name="OSM">
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            </BaseLayer>
                        </LayersControl>

                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </React.Fragment>
                }
            />
        </div>
    );
};

export default ReportMap;