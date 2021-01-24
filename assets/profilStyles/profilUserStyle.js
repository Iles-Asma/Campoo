
const styles ={

    container: {
 
       flex: 1,
        position:'relative',
       flexDirection: 'column',
        backgroundColor:'#fff',
         alignItems: 'center',
        // justifyContent: 'center',
 
 
    },
    // gap:{
    //     marginRight: 10,
    // },
    colorViolet:{
        color:'#4D3D64'
    },
    profilIdContainer:{
        flex:0,
        height:'25%', 
        width:'100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',

    },
    profilInfoContainer:{
        flex:0,
        height:'10%',
        // flex:10,
        
        width:'100%',
      
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',

    },
    profilSettings:{
        flex:1,
        width:'100%',
        
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

    profilPics:{
       
        
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
      
        // backgroundColor:'black',
    },
    profilReglage:{
        width: 25,
        height: 25,
        position:'absolute',
        right:75,
        
        

    },
    profilModif:{
        width: 25,
        height: 25,
        position:'absolute',
        right:30,
    
    },
    Pname:{
    fontSize:16,
    marginBottom:10,
    },
    nickName:{
        fontSize:30,
        fontWeight:'bold',
    },
    BioContainer:{
        flex:0.3,
        flexDirection:'row',
        height:'35%',
        width:'100%',
        
        position:'relative',
        paddingLeft:10,
        paddingRight:15,
        justifyContent: 'space-between',
        backgroundColor:'',

    },
    iconsBat:{
        flex:0,
        position:'relative',
        left:7,
        alignSelf:'center',
       
        width: 75,
        height: 65,
        
    },
    bioBloc:{
        flex:0.9,
        width:20,
        alignSelf:'center',
        fontSize:14,
        
        marginTop:15,
        textAlign:'justify',
       
       
    },
    tagTitle:{
        flex:0,
        paddingLeft:15,
        width:'100%',
        justifyContent: 'flex-start'
    }


 
 };

 export default styles 