import { Security } from './Security/security.util';

class TEST {
    
    Example(){
        let security = new Security();
        
        security.Base64Encode("jskang");
        security.Base64Decode("Yf74a");
        security.Md5Encode("jskang");
        security.Utf8Encode("jskang");
        security.Utf8Decode("jskang");
    }
    
}