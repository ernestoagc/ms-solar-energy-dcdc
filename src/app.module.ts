import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpHelperService } from './common/http/http-helper.service';
import { HttpModule } from '@nestjs/axios';
import { PanelController } from './panel/controller/panel.controller';
import { PanelService } from './panel/services/panel.service';
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController, PanelController],
  providers: [AppService, HttpHelperService, PanelService],
})
export class AppModule {}
