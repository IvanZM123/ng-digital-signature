import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import SignaturePad from "signature_pad";
import { SignatureOptions, FileMimeType } from "./declarations";

const options: Partial<SignatureOptions> = {
  background: "rgba(0, 0, 0, 0.05)",
  secondaryColor: "primary",
  primaryColor: "#ffffff",
  pencilThickness: 0.5,
  canvasHeight: 200,
  canvasWidth: 400,
  color: "black",
  types: [
    { extension: "jpg" },
    { extension: "png" },
    { extension: "svg", contentType: "svg+xml" }
  ],
  pencilColors: ["black", "#5c83e1"]
}

@Component({
  selector: 'ngx-digital-signature',
  templateUrl: "./ngx-digital-signature.component.html",
  styleUrls: ["./ngx-digital-signature.component.css"]
})
export class NgxDigitalSignatureComponent implements OnInit, AfterViewInit {
  @Input() options!: Partial<SignatureOptions>;

  format: FormControl = new FormControl("", [Validators.required]);
  private signaturePad!: SignaturePad;
  
  ngOnInit(): void {
    this.options = {...options, ...this.options};

    const canvas = document.querySelector(".ng-canva-digital-signature") as HTMLCanvasElement;

    this.signaturePad = new SignaturePad(canvas, {
      penColor: this.options.color,
      minWidth: this.options.pencilThickness,
      backgroundColor: this.options.background
    });

    window.onresize = () => this.resize();
    this.resize();
  }

  ngAfterViewInit(): void {
    this.clear();
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
    this.signaturePad.clear();
  }

  generateRandomId(): string {
    return Math.random().toString(36).slice(2);
  }
}
