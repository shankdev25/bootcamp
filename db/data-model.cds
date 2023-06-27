namespace trainer;
using {managed,cuid} from '@sap/cds/common';

entity training : managed,cuid {
  
  name     : String(100);
  skill    : String(100);
  trainer  : String(80);
  location : String(30);
  room     : String(20);
  trainee  : String(100);
  duration : String(20);
  active   : Boolean

}
