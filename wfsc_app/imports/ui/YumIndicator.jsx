import React from 'react';

export class YumIndicator extends React.Component {
  render() {
    return (
      <div
        class="YumIndicator">
        {this.props.yumFactor >= 2 &&
          <>
            <div class="icon">
              🤪
            </div>
            <div class="text">
              Yum yum!!
            </div>
          </>
        }
        {this.props.yumFactor == 1 &&
          <>
            <div class="icon">
              😋
            </div>
            <div class="text">
              Yum!
            </div>
          </>
        }
        {this.props.yumFactor == 0 &&
          <>
            <div class="icon">
              😐
            </div>
            <div class="text">
            </div>
          </>
        }
        {this.props.yumFactor == -1 &&
          <>
            <div class="icon">
              🤢
            </div>
            <div class="text">
              Yuk!
            </div>
          </>
        }
        {this.props.yumFactor <= -2 &&
          <>
            <div class="icon">
              🤮
            </div>
            <div class="text">
              Yuk yuk!!
            </div>
          </>
        }
      </div>
    );
  }
}
