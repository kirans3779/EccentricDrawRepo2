import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DrawService } from '../draw.service';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css'],
})
export class DrawingComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private drawing = false;
  private lastX: any;
  private lastY: any;

  constructor(private drawingService: DrawService) { }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
// to get element data
    this.canvas.nativeElement.addEventListener('mousedown', (e:any) => {
      this.drawing = true;
      this.lastX = e.clientX - this.canvas.nativeElement.getBoundingClientRect().left;
      this.lastY = e.clientY - this.canvas.nativeElement.getBoundingClientRect().top;
    });

    this.canvas.nativeElement.addEventListener('mousemove', (e:any) => {
      if (!this.drawing) return;

      const x = e.clientX - this.canvas.nativeElement.getBoundingClientRect().left;
      const y = e.clientY - this.canvas.nativeElement.getBoundingClientRect().top;

      this.draw(this.lastX, this.lastY, x, y);

      this.drawingService.sendDraw({ lastX: this.lastX, lastY: this.lastY, x, y });

      this.lastX = x;
      this.lastY = y;
    });

    this.canvas.nativeElement.addEventListener('mouseup', () => {
      this.drawing = false;
    });

    this.drawingService.onDraw().subscribe((data: any) => {
      this.draw(data.lastX, data.lastY, data.x, data.y);
    });
  }

  private draw(lastX: number, lastY: number, x: number, y: number) {
    this.context.beginPath();
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 2;
    this.context.moveTo(lastX, lastY);
    this.context.lineTo(x, y);
    this.context.stroke();
    this.context.closePath();
  }
}
