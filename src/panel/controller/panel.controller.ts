
import { PanelService } from '../services/panel.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
@Controller('panel')
export class PanelController {


    constructor(
        private readonly panelService:PanelService){
    }

    @Get('/energy')
    @HttpCode(HttpStatus.OK)
    public fetchNotification(
        @Query('location') location: string, 
        @Query('angle') angle: string,
        @Query('quantityPanel') quantityPanel: number
    
    ){
       return this.panelService.getSolarEnergy(location,angle,quantityPanel);
    }


}
