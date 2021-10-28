export interface FileMimeType {
  extension: string;
  contentType?: string;
}

export interface SignatureOptions {
  header: { title: string; logo?: string };
  pencilThickness: number;
  secondaryColor: string;
  pencilColors: string[];
  types: FileMimeType[];
  primaryColor: string;
  canvasHeight: number;
  canvasWidth: number;
  background: string;
  color: string;
  label: string;
  logo: string;
}
