import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {
  id!:number;
  minDate = new Date();
  cValue = formatDate(this.minDate, 'yyyy-MM-dd', 'en-US');
  vendor:Vendor=new Vendor();
  constructor(private registrationService:RegistrationService,
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.registrationService.getVendorRequestsList()
    .subscribe((response:any)=>{
      console.log(response)
      this.vendor=response;
    },error=>console.log(error));
  }
  onSubmit() {
    console.log(this.vendor);
    this.registrationService.updateDeliveryDate(this.id, this.vendor).subscribe((response:any)=>{ 
      this.gotoList();
    }, error=> console.log(error));
  }

  gotoList() {
    this.router.navigate(['/vendor']);
  }
}
