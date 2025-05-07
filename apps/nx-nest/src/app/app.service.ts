import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  postData(): { user: string }{
    return {user:""}
    
  }
}
