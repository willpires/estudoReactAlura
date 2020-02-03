import React from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
    View,
    Text
} from 'react-native';

const width = Dimensions.get("screen").width

export default function post(props) {
    const {item} = props;
    console.log(item)
    console.log(item.urlPerfil)

    return (
        < View style = {Styles.cell} >
           <View style = {Styles.subCell} >
             <Image source={{uri:item.urlPerfil}} style={Styles.imgPerfil}/>
             <Text > {item.loginUsuario} </Text>
             </View >
            <Image source = {{uri:item.urlFoto}} style = {Styles.img}/>
    </View >
    )


}


const Styles = StyleSheet.create({
    cell: {
        marginTop: 20,
        borderRadius: 30,
    },
    subCell: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    textoCell: {},
    img: {
        height: width + 102,
        width: width,
    },
    imgPerfil: {
        height: 50,
        width: 50,
        marginRight: 10,
        borderRadius: 20,
    },
});
