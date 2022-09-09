import {cleanup, fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import {PostInterface, postStatuses} from "../../../../../store/redux/posts/types";
import NoImagePlaceholder from "../../../../../images/no-post-image.png";
import Thumbnail from '../Thumbnail';


const images = [
  "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab486274592018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg"
];


describe("Post thumbnails",  () => {

  it("Load placeholder thumbnails is image is not correct", async () => {
    const { getByRole } = render(
      <Thumbnail images={images} />,
    );
    const image = document.querySelector("img") as HTMLImageElement;
    fireEvent.load(image);
    expect(image.src).toEqual(images[0])
    fireEvent.error(image);
    expect(image.src).toEqual('http://localhost/no-post-image.png')

  })
})

