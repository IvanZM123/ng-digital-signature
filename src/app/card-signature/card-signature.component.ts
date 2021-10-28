import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import SignaturePad from 'signature_pad';

export interface FileMimeType {
  extension: string;
  contentType?: string;
}

export interface SignatureOptions {
  pencilThickness: number;
  secondaryColor: string;
  pencilColors: string[];
  showControls: boolean;
  types: FileMimeType[];
  primaryColor: string;
  background: string;
  color: string;
  label: string;
}

@Component({
  selector: 'app-card-signature',
  templateUrl: './card-signature.component.html',
  styleUrls: ['./card-signature.component.css']
})
export class CardSignatureComponent implements OnInit, AfterContentInit {
  @Input() readonly options: Partial<SignatureOptions>;

  format: FormControl = new FormControl("", [Validators.required])
  private canvaHTML!: HTMLCanvasElement;
  private signaturePad!: SignaturePad;

  constructor() {
    this.options = {
      showControls: false,
      primaryColor: "white",
      secondaryColor: "blue",
      pencilThickness: 0.5,
      background: "rgba(0, 0, 0, 0.05)",
      color: "black",
      types: [
        { extension: "jpg" },
        { extension: "png" },
        { extension: "svg", contentType: "svg+xml" }
      ],
      pencilColors: ["black", "#5c83e1", "red"]
    }
  }

  ngAfterContentInit(): void {
    this.clear();
  }

  ngOnInit(): void {
    this.canvaHTML = document.querySelector(".ng-canva-digital-signature") as HTMLCanvasElement;

    this.signaturePad = new SignaturePad(this.canvaHTML, {
      penColor: this.options.color,
      minWidth: this.options.pencilThickness,
      backgroundColor: this.options.background
    });

    window.onresize = () => this.resize();
    this.resize();
  }

  clear(): void {
    this.signaturePad.clear();
  }

  download(mimetype: FileMimeType): void {
    if (this.signaturePad.isEmpty()) {
      throw new Error("Please provide a signature.");
    }

    const { extension, contentType } = mimetype;
    const data: string = this.signaturePad.toDataURL(
      `image/${ contentType || extension }`
    );
    const filename: string = `${ this.generateRandomId() }.${ extension }`;

    const a = document.createElement("a");
    a.download = filename;
    a.href = data;

    a.click();
  }

  changeColor(color: string): void {
    this.signaturePad.penColor = color;
  }

  private resize(): void {
    const ratio: number = Math.max(window.devicePixelRatio || 1, 1);

    // const canvas = (this.signaturePad as any).canvas as HTMLCanvasElement;
    this.canvaHTML.width = this.canvaHTML.offsetWidth * ratio;
    this.canvaHTML.height = this.canvaHTML.offsetHeight * ratio;
    this.canvaHTML.getContext("2d")?.scale(ratio, ratio);
  }

  generateRandomId(): string {
    return Math.random().toString(36).slice(2);
  }
}
