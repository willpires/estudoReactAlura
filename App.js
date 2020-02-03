/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import  Axios from 'axios'

import Post from './src/components/Post';

class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fotos:[]
        }
    }
    componentDidMount(): void {
        const url = "https://instalura-api.herokuapp.com/api/public/fotos/rafael"
        Axios.get(url).then((response)=>{
            console.log(response)

            this.setState({fotos:response.data})
        }).catch((error =>{
            console.log(error)
        }))
    }

    fotos = [{
    id: 1,
    usuario: 'will',
  },
    {
      id: 2,
      usuario: 'pires',
    },
    {
      id: 3,
      usuario: 'jose',
    },
  ];

  itemView = ({ item }) => {
    return <Post item = { item }/>;
  };

  render() {
    return ( <View style = {Styles.subView} >
      <SafeAreaView style = {Styles.container} >
        <FlatList style = {Styles.lista} data = {this.state.fotos}
             renderItem = {this.itemView}
             keyExtractor = {
             item => item.id
                     }
        />
        </SafeAreaView >
          </View>
        );
        }
        }
  const Styles = StyleSheet.create({
   container: {},
    subView: {
    flex: 1,
      },
     lista: {
      marginTop: 20,
        marginHorizontal: 10,
      },
      });

        export default app;
