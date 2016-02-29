Hs_Picker = React.createClass({
  
  getInitialState: function() {
    return {
      hue_value: this.props.object.hue,
      sat_value: this.props.object.sat,
      color_hex: this.getColorFromValues(this.props.object.hue, this.props.object.sat)
    };
  },

  render: function() {
    
    getHueBridgeIpAddress();
    
    var colorBoxStyle = {
      backgroundColor: this.state.color_hex,
      height: '100px',
      width: '100px',
      marginLeft: '30px'
    };

    var flexStyle = {
      display: 'flex'
    };

    return (
      <div className="hs_picker widget">
        <h3>{this.props.object.name} </h3>
        <div style = {flexStyle} >
          <div id="sliders_box">
            <div><p>Hue: {this.state.hue_value}</p></div>
            <input type="range" id="hueRange" min="0" max="360" step="1" defaultValue={this.state.hue_value} onChange={this.hueChangeFinal} onInput = {this.hueChange} />
            <div><p>Sat: {this.state.sat_value}</p></div>
            <input type="range" id="satRange" min="0" max="100" step="1" defaultValue={this.state.sat_value} onChange={this.satChange} onInput = {this.satChange}/>
          </div>
          <div style = {colorBoxStyle}> 
          </div>
        </div>
      </div>
    );
  },

  hueChange: function(event) {
    this.setState({hue_value: event.target.value});
    this.colorChange();
  },

  hueChangeFinal: function(event) {
    this.setState({hue_value: event.target.value});
    this.colorChange();
    console.log('Yellow.');
  },

  satChange: function(event) {
    this.setState({sat_value: event.target.value});
    this.colorChange();
  },

  getColorFromValues: function(hue, sat){

    calc_color = this.hsToHex(hue, sat);
    return calc_color;
  },

  colorChange: function() {

    calc_color = this.getColorFromValues(this.state.hue_value, this.state.sat_value);
    this.setState({color_hex: calc_color});

    //Now Justin, you plonk your little api updater method right here now, ya hear?
    // *plonk*

  },

  hsToHex: function(h, s) {

    v = 100;

    h = this.bound01(h, 360) * 6;
    s = this.bound01(s, 100);
    v = this.bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    var hex = [
        this.pad2(Math.round(r*255).toString(16)),
        this.pad2(Math.round(g*255).toString(16)),
        this.pad2(Math.round(b*255).toString(16))
    ];

    return ('#' + hex.join(""));
  },

  pad2: function(c) {
      return c.length == 1 ? '0' + c : '' + c;
  },

  bound01: function(n, max) {
    if (this.isOnePointZero(n)) { 
      n = "100%"; 
    }

    n = Math.min(max, Math.max(0, parseFloat(n)));


    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
  },

  isOnePointZero: function(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  },



});