const gap = 8
const phone = 599;
const tablet = 905;
const laptop = 1239;
const desktop = 1440;

module.exports =  function() {
  return {
    gap: gap,
    media: {
      phone : phone,
      tablet : tablet,
      laptop : laptop,
      desktop : desktop
    },
    elements : {
      "body": {
        "desktop" : {
          "font-family": "Roboto, Arial, sans-serif",
          "padding" : "0",
          "margin" : "0"
          }
      },
      ".container": {
        "desktop" : {
          "max-width" : desktop - gap*2 + 'px',
          "padding" : gap + 'px',
          "margin": "0 auto"
          }
      },
      ".dimensional-container": {
          "desktop" : {
              "padding" : gap + 'px'
            }
      },
      "h1": {
        "desktop": {
          "margin" : "0",
          "padding" : `13.44px ${gap}px 13.44px ${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "32px",
          "line-height": "150%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "32px",
          "line-height": "150%"
        },
        "tablet": {
          "font-size" : "32px",
          "line-height": "150%"
        },
        "phone": {
          "font-size" : "32px",
          "line-height": "150%"
        }
      },
      "h2": {
        "desktop": {
          "margin" : "0",
          "padding" : `11.92px ${gap}px 11.92px ${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "24px",
          "line-height": "148%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "24px",
          "line-height": "148%"
        },
        "tablet": {
          "font-size" : "24px",
          "line-height": "148%"
        },
        "phone": {
          "font-size" : "24px",
          "line-height": "148%"
      }
      },
      "h3": {
        "desktop": {
          "margin" : "0",
          "padding" : `10.72px ${gap}px 10.72px ${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "18.72px",
          "line-height": "156%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "18.72px",
          "line-height": "156%"
        },
        "tablet": {
          "font-size" : "18.72px",
          "line-height": "156%"
        },
        "phone": {
          "font-size" : "18.72px",
          "line-height": "156%"
        }
      },
      "h4": {
        "desktop": {
          "margin" : "0",
          "padding" : `13.28px ${gap}px 13.28px ${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "16px",
          "line-height": "159%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "16px",
          "line-height": "159%"
        },
        "tablet": {
          "font-size" : "16px",
          "line-height": "159%"
        },
        "phone": {
          "font-size" : "16px",
          "line-height": "159%"
        }
      },
      "h5": {
        "desktop": {
          "margin" : "0",
          "padding" : `14.1776px ${gap}px 14.1776px ${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "13.28px",
          "line-height": "156%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "13.28px",
          "line-height": "156%"
        },
        "tablet": {
          "font-size" : "13.28px",
          "line-height": "156%"
        },
        "phone": {
          "font-size" : "13.28px",
          "line-height": "156%"
        }
      },
      "h6": {
        "desktop": {
          "margin" : "0",
          "padding" : `16.9776px ${gap}px 16.9776px ${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "10.72px",
          "line-height": "150%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "10.72px",
          "line-height": "150%"
        },
        "tablet": {
          "font-size" : "10.72px",
          "line-height": "150%"
        },
        "phone": {
          "font-size" : "10.72px",
          "line-height": "150%"
        }
      },
      "p": {
        "desktop": {
          "margin" : "0",
          "padding" : `16.9776px ${gap}px 16.9776px ${gap}px`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "16px",
          "line-height": "120%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "16px",
          "line-height": "120%"
        },
        "tablet": {
          "font-size" : "16px",
          "line-height": "120%"
        },
        "phone": {
          "font-size" : "16px",
          "line-height": "120%"
        }
      },
      "ul": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px ${gap}px ${gap}px ${gap*5.5}`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "16px",
          "line-height": "160%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "16px",
          "line-height": "160%"
        },
        "tablet": {
          "font-size" : "16px",
          "line-height": "160%"
        },
        "phone": {
          "font-size" : "16px",
          "line-height": "160%"
        }
      },
      "ol": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px ${gap}px ${gap}px ${gap*5.5}`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "16px",
          "line-height": "160%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "16px",
          "line-height": "160%"
        },
        "tablet": {
          "font-size" : "16px",
          "line-height": "160%"
        },
        "phone": {
          "font-size" : "16px",
          "line-height": "160%"
        }
      },
      "dl": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap*2} 0`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "16px",
          "line-height": "160%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "16px",
          "line-height": "160%"
        },
        "tablet": {
          "font-size" : "16px",
          "line-height": "160%"
        },
        "phone": {
          "font-size" : "16px",
          "line-height": "160%"
        }
      },
      "blockquote": {
        "desktop" : {
          "margin" : "0",
          "padding" : `${gap*2} ${gap*5}`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "16px",
          "line-height": "160%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop" : {
          "font-size" : "16px",
          "line-height": "160%"
        },
        "tablet" : {
          "font-size" : "16px",
          "line-height": "160%"
        },
        "phone" : {
          "font-size" : "16px",
          "line-height": "160%"
        }
      },
      "table": {
        "desktop" : {
          "margin" : "0",
          "padding" : "0",
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "16px",
          "line-height": "150%",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop" : {
          "font-size" : "16px",
          "line-height": "150%"
        },
        "tablet" : {
          "font-size" : "16px",
          "line-height": "150%"
        },
        "phone" : {
          "font-size" : "16px",
          "line-height": "150%"
        }
      },
      "title": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "20px",
          "line-height": "32px",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "20px",
          "line-height": "32px"
        },
        "tablet": {
          "font-size" : "20px",
          "line-height": "32px"
        },
        "phone": {
          "font-size" : "20px",
          "line-height": "32px"
        }
      },
      "subtitle": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "18px",
          "line-height": "28px",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "18px",
          "line-height": "28px"
        },
        "tablet": {
          "font-size" : "18px",
          "line-height": "28px"
        },
        "phone": {
          "font-size" : "18px",
          "line-height": "28px"
        }
      },
      "body-xxl": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "56px",
          "line-height": "56px",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "56px",
          "line-height": "56px"
        },
        "tablet": {
          "font-size" : "56px",
          "line-height": "56px"
        },
        "phone": {
          "font-size" : "56px",
          "line-height": "56px"
        }
      },
      "body-xl": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "20px",
          "line-height": "32px",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "20px",
          "line-height": "32px"
        },
        "tablet": {
          "font-size" : "20px",
          "line-height": "32px"
        },
        "phone": {
          "font-size" : "20px",
          "line-height": "32px"
        }
      },
      "body-l": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "18px",
          "line-height": "28px",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "18px",
          "line-height": "28px"
        },
        "tablet": {
          "font-size" : "18px",
          "line-height": "28px"
        },
        "phone": {
          "font-size" : "18px",
          "line-height": "28px"
        }
      },
      "body-m": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "16px",
          "line-height": "24px",
          "word-spacing": "0px",
          "letter-spacing": "0px"
        },
        "laptop": {
          "font-size" : "16px",
          "line-height": "24px"
        },
        "tablet": {
          "font-size" : "16px",
          "line-height": "24px"
        },
        "phone": {
          "font-size" : "16px",
          "line-height": "24px"
        }
      },
      "body-s": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "500",
          "font-size" : "14px",
          "line-height": "20px",
          "word-spacing": "0px",
          "letter-spacing": "0.1px"
        },
        "laptop": {
          "font-size" : "14px",
          "line-height": "20px"
        },
        "tablet": {
          "font-size" : "14px",
          "line-height": "20px"
        },
        "phone": {
          "font-size" : "14px",
          "line-height": "20px"
        }
      },
      "button": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "700",
          "font-size" : "14px",
          "line-height": "20px",
          "word-spacing": "0px",
          "letter-spacing": "0.4px"
        },
        "laptop": {
          "font-size" : "14px",
          "line-height": "20px"
        },
        "tablet": {
          "font-size" : "14px",
          "line-height": "20px"
        },
        "phone": {
          "font-size" : "14px",
          "line-height": "20px"
        }
      },
      "caption": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "12px",
          "line-height": "16px",
          "word-spacing": "0px",
          "letter-spacing": "0.2px"
        },
        "laptop": {
          "font-size" : "12px",
          "line-height": "16px"
        },
        "tablet": {
          "font-size" : "12px",
          "line-height": "16px"
        },
        "phone": {
          "font-size" : "12px",
          "line-height": "16px"
        }
      },
      "overline": {
        "desktop": {
          "margin" : "0",
          "padding" : `${gap}px`,
          "font-family": "Roboto",
          "font-weight": "400",
          "font-size" : "10px",
          "line-height": "16px",
          "word-spacing": "0px",
          "letter-spacing": "0.4px"
        },
        "laptop": {
          "font-size" : "10px",
          "line-height": "16px"
        },
        "tablet": {
          "font-size" : "10px",
          "line-height": "16px"
        },
        "phone": {
          "font-size" : "10px",
          "line-height": "16px"
        }
      }
    }
  }
};