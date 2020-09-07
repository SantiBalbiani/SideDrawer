import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "~/app/domain/noticias.service";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
  
})
export class SearchComponent implements OnInit {

    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.noticias.agregar('Noticia 1');
        this.noticias.agregar('Noticia 2');
        this.noticias.agregar('Noticia 3');
        this.noticias.agregar('Noticia 4');
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
