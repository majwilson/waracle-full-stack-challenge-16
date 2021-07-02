import React from 'react';

export class YumIndicator extends React.Component {
  render() {
    return (
      <>
        {this.props.yumFactor >= 2 &&
          <>
            <div className="icon">
              🤪
            </div>
            <div className="text">
              Yum yum!!
            </div>
          </>
        }
        {this.props.yumFactor == 1 &&
          <>
            <div className="icon">
              😋
            </div>
            <div className="text">
              Yum!
            </div>
          </>
        }
        {this.props.yumFactor == 0 &&
          <>
            <div className="icon">
              😐
            </div>
            <div className="text">
            </div>
          </>
        }
        {this.props.yumFactor == -1 &&
          <>
            <div className="icon">
              🤢
            </div>
            <div className="text">
              Yuk!
            </div>
          </>
        }
        {this.props.yumFactor <= -2 &&
          <>
            <div className="icon">
              🤮
            </div>
            <div className="text">
              Yuk yuk!!
            </div>
          </>
        }
      </>
    );
  }
}
