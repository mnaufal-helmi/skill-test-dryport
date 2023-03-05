import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import Axios from 'axios';

const nametable = {
  tableHead: ['No Container', 'Size', 'Type', 'Slot', 'Row', 'Tier'],
  tableData: [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd'],
  ],
};

const ContentTabel = ({no_container, size, type, slot, row, tier}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {};
  Axios.get('http://10.0.2.2:3000/users').then(res => {
    console.log('data <<<', res);
    setUsers(res.data);
  });

  return (
    <>
      <View style={style.container}>
        <Table borderStyle={style.table}>
          <Row
            data={nametable.tableHead}
            style={style.head}
            textStyle={style.text}
          />
          {users.map(user => {
            return <Rows data={users} textStyle={style.text} />;
          })}
        </Table>
      </View>
    </>
  );
};

export default ContentTabel;
const style = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  table: {borderWidth: 2, borderColor: '#c8e1ff'},
  head: {height: 50, backgroundColor: '#f1f8ff'},
  text: {margin: 6, width: 40, color: 'black'},
});
