/// <reference types="node" />
export declare function fromVPriv(input: String): Buffer;
export declare function toVPriv(input: Buffer): Buffer;

export declare class InvalidStartError extends Error {
  code: String
}

export declare class InvalidLengthError extends Error {
  code: String
}
