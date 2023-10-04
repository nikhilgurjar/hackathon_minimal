import { useState, useCallback, memo } from 'react';
import Map from 'react-map-gl';
// components
import { MapPopup, MapMarker, MapControl, MapBoxProps } from 'src/components/map';
//
import ControlPanel from './ControlPanel';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------
type MarkerLocatonProps = {
  name: string;
  latlng: number[];
  level: number
};

interface Props extends MapBoxProps {
  themes: {
    [key: string]: string;
  };
  data: MarkerLocatonProps[];
}

function MapChangeTheme({ themes,data, ...other }: Props) {
  const [selectTheme, setSelectTheme] = useState('outdoors');
  const [popupInfo, setPopupInfo] = useState<MarkerLocatonProps | null>(null);

  const handleChangeTheme = useCallback((value: string) => setSelectTheme(value), []);

  return (
    <>
      <Map
        initialViewState={{
          latitude: 37.785164,
          longitude: -100,
          zoom: 3.5,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle={themes?.[selectTheme]}
        {...other}
      >
        <MapControl />
        {data.map((city, index) => (
        <MapMarker
          key={`marker-${index}`}
          latitude={city.latlng[0]}
          longitude={city.latlng[1]}
          onClick={(event) => {
            event.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        />
      ))}

{popupInfo && (
        <MapPopup
          latitude={popupInfo.latlng[0]}
          longitude={popupInfo.latlng[1]}
          onClose={() => setPopupInfo(null)}
        >
          <Box sx={{ color: 'common.white' }}>
            <Box
              sx={{
                mb: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  height: '18px',
                  minWidth: '28px',
                  marginRight: '8px',
                  borderRadius: '4px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${popupInfo.country_code.toLowerCase()}.svg)`,
                }}
              />
              <Typography variant="subtitle2">{popupInfo.name}</Typography>
            </Box>
            <Typography component="div" variant="caption">
              Lat: {popupInfo.latlng[0]}
            </Typography>

            <Typography component="div" variant="caption">
              Long: {popupInfo.latlng[1]}
            </Typography>
          </Box>
        </MapPopup>
      )}
      </Map>

      <ControlPanel themes={themes} selectTheme={selectTheme} onChangeTheme={handleChangeTheme} />
    </>
  );
}

export default memo(MapChangeTheme);
