import { Component } from '@angular/core';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule } from '@angular/common';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    standalone:true,
    imports: [
        CommonModule,
        ProgressBarModule,
        BadgeModule,
        AvatarModule,
        ScrollPanelModule,
        TagModule,
        ChipModule,
        ButtonModule,
        SkeletonModule,
        AvatarGroupModule,
        ScrollTopModule,
        OverlayBadgeModule
    ],
    template: `<div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>ProgressBar</h5>
                <div class="grid">
                    <div class="col">
                        <p-progressBar [value]="value" [showValue]="true"></p-progressBar>
                    </div>
                    <div class="col">
                        <p-progressBar [value]="50" [showValue]="false"></p-progressBar>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6">
            <div class="card">
                <h4>Badge</h4>
                <h5>Numbers</h5>
                <div class="flex flex-wrap gap-2">
                    <p-badge value="2"></p-badge>
                    <p-badge value="8" severity="success"></p-badge>
                    <p-badge value="4" severity="info"></p-badge>
                    <p-badge value="12" severity="warn"></p-badge>
                    <p-badge value="3" severity="danger"></p-badge>
                </div>

                <h5>Positioned Badge</h5>
                <div class="flex flex-wrap gap-2">
                    <i class="pi pi-bell mr-4 p-text-secondary" pBadge style="font-size: 2rem" value="2"></i>
                    <i class="pi pi-calendar mr-4 p-text-secondary" pBadge style="font-size: 2rem" [value]="'10+'" severity="danger"></i>
                    <i class="pi pi-envelope p-text-secondary" pBadge style="font-size: 2rem" severity="danger"></i>
                </div>


                <h5>Inline Button Badge</h5>
                <div class="flex flex-wrap gap-2">
                    <p-button label="Emails" badge="8"></p-button>
                    <p-button label="Messages" icon="pi pi-users" styleClass="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>
                </div>


                <h5>Sizes</h5>
                <div class="flex flex-wrap gap-2 align-items-end">
                    <p-overlay-badge value="2"></p-overlay-badge>
                    <p-overlay-badge value="4" badgeSize="large" severity="warn"></p-overlay-badge>
                    <p-overlay-badge value="6" badgeSize="xlarge" severity="success"></p-overlay-badge>
                </div>
            </div>

            <div class="card">
                <h4>Avatar</h4>
                <h5>Avatar Group</h5>
                <p-avatarGroup styleClass="mb-3">
                    <p-avatar image="assets/demo/images/avatar/amyelsner.png" size="large" shape="circle"></p-avatar>
                    <p-avatar image="assets/demo/images/avatar/asiyajavayant.png" size="large" shape="circle"></p-avatar>
                    <p-avatar image="assets/demo/images/avatar/onyamalimba.png" size="large" shape="circle"></p-avatar>
                    <p-avatar image="assets/demo/images/avatar/ionibowcher.png" size="large" shape="circle"></p-avatar>
                    <p-avatar image="assets/demo/images/avatar/xuxuefeng.png" size="large"shape="circle"></p-avatar>
                    <p-avatar label="+2" shape="circle" size="large" [style]="{'background-color':'#9c27b0', 'color': '#ffffff'}"></p-avatar>
                </p-avatarGroup>

                <h5>Label - Circle</h5>
                <div class="flex flex-wrap gap-2 align-items-end">
                    <p-avatar label="P" size="xlarge" shape="circle"></p-avatar>
                    <p-avatar label="V" size="large" [style]="{'background-color':'#2196F3', 'color': '#ffffff'}" shape="circle"></p-avatar>
                    <p-avatar label="U" [style]="{'background-color': '#9c27b0', 'color': '#ffffff'}" shape="circle"></p-avatar>
                </div>

                <h5>Icon - Badge</h5>
                <p-avatar icon="pi pi-user" pBadge value="4" severity="success" size="xlarge"></p-avatar>
            </div>

            <div class="card">
                <h4>ScrollTop</h4>
                <p-scrollPanel [style]="{width: '250px', height: '200px'}">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                    <p-scrollTop target="parent" styleClass="custom-scrolltop" [threshold]="100" icon="pi pi-arrow-up"></p-scrollTop>
                </p-scrollPanel>
            </div>
        </div>
        <div class="col-12 lg:col-6">
            <div class="card">
                <h4>Tag</h4>
                <h5>Tags</h5>
                <div class="flex flex-wrap gap-2">
                    <p-tag value="Primary"></p-tag>
                    <p-tag severity="success" value="Success"></p-tag>
                    <p-tag severity="info" value="Info"></p-tag>
                    <p-tag severity="warn" value="Warning"></p-tag>
                    <p-tag severity="danger" value="Danger"></p-tag>
                </div>

                <h5>Pills</h5>
                <div class="flex flex-wrap gap-2">
                    <p-tag value="Primary" [rounded]="true"></p-tag>
                    <p-tag severity="success" value="Success" [rounded]="true"></p-tag>
                    <p-tag severity="info" value="Info" [rounded]="true"></p-tag>
                    <p-tag severity="warn" value="Warning" [rounded]="true"></p-tag>
                    <p-tag severity="danger" value="Danger" [rounded]="true"></p-tag>
                </div>

                <h5>Icons</h5>
                <div class="flex flex-wrap gap-2">
                    <p-tag icon="pi pi-user" value="Primary"></p-tag>
                    <p-tag icon="pi pi-check" severity="success" value="Success"></p-tag>
                    <p-tag icon="pi pi-info-circle" severity="info" value="Info"></p-tag>
                    <p-tag con="pi pi-exclamation-triangle" severity="warn" value="Warning"></p-tag>
                    <p-tag icon="pi pi-times" severity="danger" value="Danger"></p-tag>
                </div>
            </div>

            <div class="card">
                <h4>Chip</h4>
                <h5>Basic</h5>
                <div class="flex flex-wrap align-items-center">
                    <p-chip label="Action" styleClass="m-1"></p-chip>
                    <p-chip label="Comedy" styleClass="m-1"></p-chip>
                    <p-chip label="Mystery" styleClass="m-1"></p-chip>
                    <p-chip label="Thriller" styleClass="m-1" [removable]="true"></p-chip>
                </div>

                <h5>Icon</h5>
                <div class="flex flex-wrap align-items-center">
                    <p-chip label="Apple" icon="pi pi-apple" styleClass="m-1"></p-chip>
                    <p-chip label="Facebook" icon="pi pi-facebook" styleClass="m-1"></p-chip>
                    <p-chip label="Google" icon="pi pi-google" styleClass="m-1"></p-chip>
                    <p-chip label="Microsoft" icon="pi pi-microsoft" styleClass="m-1" [removable]="true"></p-chip>
                </div>

                <h5>Image</h5>
                <div class="flex flex-wrap align-items-center">
                    <p-chip label="Amy Elsner" image="assets/demo/images/avatar/amyelsner.png" styleClass="m-1"></p-chip>
                    <p-chip label="Asiya Javayant" image="assets/demo/images/avatar/asiyajavayant.png" styleClass="m-1"></p-chip>
                    <p-chip label="Onyama Limba" image="assets/demo/images/avatar/onyamalimba.png" styleClass="m-1"></p-chip>
                    <p-chip label="Xuxue Feng" image="assets/demo/images/avatar/xuxuefeng.png" styleClass="m-1" [removable]="true"></p-chip>
                </div>

                <h5>Styling</h5>
                <div class="flex flex-wrap align-items-center">
                    <p-chip label="Action" styleClass="m-1 custom-chip"></p-chip>
                    <p-chip label="Comedy" styleClass="m-1 custom-chip"></p-chip>
                    <p-chip label="Onyama Limba" image="assets/demo/images/avatar/onyamalimba.png" styleClass="m-1 custom-chip"></p-chip>
                    <p-chip label="Xuxue Feng" image="assets/demo/images/avatar/xuxuefeng.png" [removable]="true" styleClass="m-1 custom-chip"></p-chip>
                </div>
            </div>

            <div class="card">
                <h4>Skeleton</h4>
                <div class="border-round border-1 surface-border p-4">
                    <div class="flex mb-3">
                        <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                        <div>
                            <p-skeleton width="10rem" styleClass="mb-2"></p-skeleton>
                            <p-skeleton width="5rem" styleClass="mb-2"></p-skeleton>
                            <p-skeleton height=".5rem"></p-skeleton>
                        </div>
                    </div>
                    <p-skeleton width="100%" height="150px"></p-skeleton>
                    <div class="flex justify-content-between mt-3">
                        <p-skeleton width="4rem" height="2rem"></p-skeleton>
                        <p-skeleton width="4rem" height="2rem"></p-skeleton>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
})
export class MiscDoc {
    value = 0;

    interval: any;

    ngOnInit() {
        this.interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                clearInterval(this.interval);
            }
        }, 2000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
