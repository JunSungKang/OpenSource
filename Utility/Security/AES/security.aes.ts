import { SBox } from './s_box';

export class AES_Function {
    private sbox = new SBox();

    StringToHex(str: String) {
        var hexStr = "";
        for (let i = 0; i < str.length; i++) {
            hexStr += str.charCodeAt(i).toString(16);
            if(i < str.length-1) { hexStr += ','; }
        }
        return hexStr;
    }

    HexToString(hex: String) {
        var str = "";
        for(let i = 0; i < hex.length; i++){
            str += String.fromCharCode(parseInt(hex.toString(), 16));
        }
        return str;
    }

    SubBytes(data: String) {
        let wordArray: String[] = this.StringToHex(data).split(',');
        let encodeByte: Array<Array<String>> = new Array<Array<String>>();
        var rowByte: Array<String> = new Array<String>();

        for(let i = 0; i<wordArray.length; i++){
            // One array is 64 data.
            if(i%64 == 0 && i != 0){
                encodeByte.push(rowByte);
                rowByte = new Array<String>();
            }
            
            // Convert words using SBoxModel.
            let temp: String = this.sbox.EncodeBox[wordArray[i].charAt(0)][wordArray[i].charAt(1)].toString(16);

            // For single digit numbers. 0 Added.
            if(temp.length == 1){ temp = '0' + temp; }

            // 1 data Added
            rowByte.push(temp);
        }

        // Less than 64 data OR Zero array
        if(encodeByte.length == 0 || rowByte.length < 65){ encodeByte.push(rowByte); }

        return encodeByte;
    }

    InvSubBytes(data: Array<Array<String>>) {
        var oriData = "";
        for(let i = 0; i<data.length; i++){
            for(let j = 0; j<data[i].length; j++){
                let x = parseInt(data[i][j].charAt(0), 16);
                let y = parseInt(data[i][j].charAt(1), 16);
                console.log(x, y);
                let temp: String = this.sbox.DecodeBox[x][y].toString();
                oriData += this.HexToString(temp);
            }
        }
        
        return oriData;
    }
}