enum TransferDataEnum {
  DCDTNFTTransfer = 'DCDTNFTTransfer',
  DCDTNFTCreate = 'DCDTNFTCreate',
  DCDTNFTBurn = 'DCDTNFTBurn',
  MultiDCDTNFTTransfer = 'MultiDCDTNFTTransfer'
}

export const isNftOrMultiDcdtTx = (data: string) =>
  Object.values(TransferDataEnum).some((value) => data.startsWith(value));
