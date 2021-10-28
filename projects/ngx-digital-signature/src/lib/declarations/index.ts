export interface FileMimeType {
  /**
   * Represents the type of extension the file has. Example: jpg, png, svg
   * 
   * **Note**: Do not add the dot to the extension, only extension name
   */
  extension: string;
  /**
   * This is used in files that need additional information.
   * 
   * For example:
   * - `svg` -> svg+xml
   * - `pdf` -> application/pdf
   * 
   * **Note**: If your file does not require additional information, ignore this property.
   */
  contentType?: string;
}

export interface SignatureOptions {
  /**
   * Component header, here add a title and logo.
   */
  header: { title: string; logo?: string };
  /**
   * Represents the thickness of the pencil.
   */
  pencilThickness: number;
  /**
   * Secondary color. It is added to buttons, letters, selectors, etc.
   */
  secondaryColor: string;
  /**
   * All ink colors available.
   */
  pencilColors: string[];
  /**
   * All image formats
   */
  types: FileMimeType[];
  /**
   * Primary color. It is added to the general component.
   */
  primaryColor: string;
  /**
   * Canvas height.
   */
  canvasHeight: number;
  /**
   * Canvas width.
   */
  canvasWidth: number;
  /**
   * Color of the canvas where the signature is made.
   */
  background: string;
  /**
   * Defaul pencil color.
   */
  color: string;
  /**
   * Add a short description.
   */
  label: string;
}
