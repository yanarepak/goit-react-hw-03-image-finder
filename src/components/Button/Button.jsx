import { GalleryButton } from "./Button.styled";

export const Button = ({onLoadMore}) => {
  return (
    <GalleryButton type="button" onClick={onLoadMore}>
      Load more
    </GalleryButton>
  );
};