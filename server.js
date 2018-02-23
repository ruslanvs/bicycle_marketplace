console.log( "******** server.js ********" );

let express = require( "express");
let app = express();

let bodyParser = require( "body-parser" );
let path = require( "path" );
let mongoose = require( "mongoose" );

mongoose.Promise = global.Promise;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

app.use( express.static( __dirname + "/client/dist" ) );

mongoose.connect( "mongodb://localhost/bicycle_marketplace" );

let Schema = mongoose.Schema;

let ListingSchema = new mongoose.Schema( {
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true }
}, { timestamps: true } );
let Listing = mongoose.model( "Listing", ListingSchema );

let UserSchema = new mongoose.Schema( {
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    city: {type: String, required: true },
    state: {type: String, required: true },
    email: { type: String, required: true },
    pw: { type: String, required: true },
    listings: [{ type: Schema.Types.ObjectId, ref: "Listing" }]
}, { timestamps: true } );
let User = mongoose.model( "User", UserSchema )

// LISTING ROUTES
app.get( "/listings", function( req, res ){
    Listing.find( {}, function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", listings: data } ) }
    });
});

app.get( "/users/:id/listings", function( req, res ){
    Listing.find( { _user: req.params.id }, function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", listings: data } ) }
    });
});

app.get( "/listings/:id", function( req, res ){
    Listing.find( { _id: req.params.id }, function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", listings: data } ) }
    });
});

app.post( "/users/:id/listings/", function( req, res ){
    User.findOne( { _id: req.params.id }, function ( err, user ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{
            // res.json( { message: "Success", user: user } );
            let listing = new Listing( req.body );
                    listing._user = user._id;
                    listing.city = user.city;
                    listing.state = user.state;
                    title: req.body.title;
                    desc: req.body.desc;
                    price: req.body.price;
                
                listing.save( function( err, data ){
                    if( err ){ res.json( { message: "Error", error: err } ) }
                    else{ res.json( { message: "Success", listings: data } ) }
                })
        }
    })
});

app.put( "/listings/:id", function( req, res ){
    Listing.update( { _id: req.params.id },{
        title: req.body.title,
        desc: req.body.desc,
        price: req.body.price,
        city: req.body.city,
        state: req.body.state
    }, function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", listings: data } ) }
    });
});

app.delete( "/listings/:id", function( req, res ){
    Listing.remove( { _id: req.params.id }, function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", listings: data } ) }
    });
});

//USER ROUTES
app.get( "/users", function( req, res ){
    User.find( {}, function( err, data ) {
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", users: data } ) }
    });
});

app.get( "/users/:id", function( req, res ){
    User.find( { _id: req.params.id }, function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", users: data } ) }
    });
});

app.post( "/users", function( req, res ){
    let user = new User( {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        city: req.body.city,
        state: req.body.state,
        email: req.body.email,
        pw: "password", //>>> fix this
    })
    user.save( function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", users: data } ) }
    });
});

app.put( "/users/:id", function( req, res ){
    User.update( { _id: req.params.id }, {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        city: req.body.city,
        state: req.body.state,
        email: req.body.email,
        pw: "password", //>>> fix this
    }, function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", users: data } ) }
    });
});

app.delete( "/users", function( req, res ){
    User.remove( { _id: req.params.id }, function( err, data ){
        if( err ){ res.json( { message: "Error", error: err } ) }
        else{ res.json( { message: "Success", users: data } ) }
    });
});

app.all( "*", ( req, res, next ) => {
    res.sendFile( path.resolve( "./client/dist/index.html" ) );
});

app.listen( 8001, function(){
    console.log( "listening on port 8000" );
});