export interface SecurityInterface {
    Base64Encode(data): String;
    Base64Decode(data): String;
    Utf8Encode(data): String;
    Utf8Decode(data): String;
    Md5Encode(data): String;
}

