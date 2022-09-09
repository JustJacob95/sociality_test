import React, {SyntheticEvent} from 'react';
import NoImagePlaceholder from "../../../../images/no-post-image.png";


type ThumbnailPropsType = {
  images?: Array<string> | string;
}

const Thumbnail: React.FunctionComponent<ThumbnailPropsType> = ({images}: ThumbnailPropsType ) => {

  const onImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    const image = e.target as HTMLImageElement;
    image.src = NoImagePlaceholder
  }

  return(<>
    <img onError={onImageError} src={Array.isArray(images) ? images[0] : images} alt=""/>
  </>)
}

export default Thumbnail