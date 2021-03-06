import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GameList } from '../interface/game.interface';
import { webServerURL, brokerServerURL } from '../shared/common';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  connectUrl = `${webServerURL}/config`;

  getConfigTemplate() {
    return this.http.get(`${this.connectUrl}/template`)
  }

  getConfigData() {
    return this.http.get (`${this.connectUrl}/data`);
  }

  getOptions() {
    return this.http.get(`${this.connectUrl}/options`);
  }

  recordDataConfig(payload) {
    return this.http.post (`${this.connectUrl}/data/new`, payload);
  }

  setDataConfig(payload) {
    return this.http.post (`${this.connectUrl}/data/modify`, payload);
  }

  serverDataConfig(payload) {
    return this.http.post<any>(`${brokerServerURL}/Conf`, payload);
  }

}