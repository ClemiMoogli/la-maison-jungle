import CareScale from './CareScale.jsx'


const PlantItem = ({name, cover, id, light, water}) => {
  return (
  <>
    <img src={cover} alt={name} />
		<CareScale careType='water' scaleValue={water} />
    <CareScale careType='light' scaleValue={light} />
  </>
  );
}

export default PlantItem
