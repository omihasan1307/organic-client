declare module "react-image-zoom" {
  interface ReactImageZoomProps {
    width: number;
    height: number;
    zoomWidth: number;
    img: string;
    zoomStyle?: string;
    zoomPosition?: "right" | "left" | "top" | "bottom";
    zoomLensStyle?: string;
  }

  const ReactImageZoom: (props: ReactImageZoomProps) => JSX.Element;
  export default ReactImageZoom;
}
