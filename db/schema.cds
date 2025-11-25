using { managed } from '@sap/cds/common';

namespace company.anonymousproject;

entity Feedback : managed {
  key ID       : UUID;
  toName       : String(200);      // store recipient name
  message      : String(2000);
  category     : String(50);
  isAnonymous  : Boolean default true;
  status       : String(20) default 'New';
}
