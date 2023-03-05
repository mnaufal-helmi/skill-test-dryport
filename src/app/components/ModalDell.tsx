import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const window = Dimensions.get('window');

const ModalDell = ({
  visible,
  onConfirm,
  onCancel,
}: {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <View>
      <Modal animationType="slide" visible={visible} transparent={true}>
        <View style={style.container}>
          <View style={style.wrapper}>
            <View style={style.viewModal}>
              <Text style={style.txtTitleAlert}>Alert</Text>
              <Text style={style.txtAsk}>Yakin Hapus data?</Text>
              <View style={style.viewBtn}>
                <TouchableOpacity style={style.btnDel} onPress={onCancel}>
                  <Text style={style.txtBtnDel}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btnDel} onPress={onConfirm}>
                  <Text style={style.txtBtnDel}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDell;
const style = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  wrapper: {
    height: window.height * 1,
    width: window.width * 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewModal: {
    height: '30%',
    width: '65%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  viewBtn: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  btnDel: {
    backgroundColor: 'white',
    height: window.height * 0.05,
    width: window.width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  txtBtnDel: {
    color: 'black',
    fontSize: 20,
  },
  txtTitleAlert: {color: 'black', fontSize: 25},
  txtAsk: {
    color: 'black',
    marginTop: 30,
  },
});
