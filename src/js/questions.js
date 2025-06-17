const questions = [
  {
    "id": 1,
    "value": "I put all of my excess income in savings to grow slowly rather than invest it and risk losing it.",
    "points": {
      "sa": {
        "saver": 8
      },
      "a": {
        "saver": 4,
        "compulsive": 2,
        "indifferent": 2
      },
      "n": {
        "saver": 2,
        "investor": 2,
        "compulsive": 1,
        "indifferent": 1,
        "shopper": 1,
        "gambler": 1
      },
      "d": {
        "investor": 4,
        "shopper": 2,
        "gambler": 2
      },
      "sd": {
        "investor": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -2],
      "sd": [-8, -4]
    }
  },
  {
    "id": 2,
    "value": "I am never tempted to take money out of my emergency savings when I want to splurge on a purchase or activity.",
    "points": {
      "sa": {
        "saver": 8
      },
      "a": {
        "saver": 4,
        "investor": 2,
        "compulsive": 2
      },
      "n": {
        "saver": 2,
        "debtor": 2,
        "compulsive": 1,
        "investor": 1,
        "spender": 1,
        "gambler": 1
      },
      "d": {
        "debtor": 4,
        "spender": 2,
        "gambler": 2
      },
      "sd": {
        "debtor": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 3,
    "value": "I often spend more money than I actually have because I want to maintain a certain lifestyle.",
    "points": {
      "sa": {
        "spender": 8
      },
      "a": {
        "spender": 4,
        "gambler": 2,
        "debtor": 2
      },
      "n": {
        "spender": 2,
        "saver": 2,
        "gambler": 1,
        "debtor": 1,
        "indifferent": 1,
        "investor": 1
      },
      "d": {
        "saver": 4,
        "indifferent": 2,
        "investor": 2
      },
      "sd": {
        "saver": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 4,
    "value": "What really motivates me to earn more money is having luxury goods.",
    "points": {
      "sa": {
        "spender": 8
      },
      "a": {
        "spender": 4,
        "compulsive": 2,
        "shopper": 2
      },
      "n": {
        "spender": 2,
        "indifferent": 2,
        "compulsive": 1,
        "shopper": 1,
        "saver": 1,
        "investor": 1
      },
      "d": {
        "indifferent": 4,
        "saver": 2,
        "investor": 2
      },
      "sd": {
        "indifferent": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 5,
    "value": "I always choose the cheapest option when shopping by taking advantage of deals and buying lower-quality items.",
    "points": {
      "sa": {
        "shopper": 8
      },
      "a": {
        "shopper": 4,
        "debtor": 2,
        "saver": 2
      },
      "n": {
        "shopper": 2,
        "spender": 2,
        "debtor": 1,
        "gambler": 1,
        "saver": 1,
        "investor": 1
      },
      "d": {
        "spender": 4,
        "gambler": 2,
        "investor": 2
      },
      "sd": {
        "spender": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 6,
    "value": "My happiness depends on my capacity to splurge on purchases.",
    "points": {
      "sa": {
        "shopper": 8
      },
      "a": {
        "shopper": 4,
        "spender": 2,
        "gambler": 2
      },
      "n": {
        "shopper": 2,
        "compulsive": 2,
        "debtor": 1,
        "gambler": 1,
        "spender": 1,
        "indifferent": 1
      },
      "d": {
        "compulsive": 4,
        "debtor": 2,
        "indifferent": 2
      },
      "sd": {
        "compulsive": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 7,
    "value": "It makes me anxious to take time off because I could be using my time to make money instead.",
    "points": {
      "sa": {
        "compulsive": 8
      },
      "a": {
        "compulsive": 4,
        "investor": 2,
        "debtor": 2
      },
      "n": {
        "compulsive": 2,
        "indifferent": 2,
        "debtor": 1,
        "spender": 1,
        "saver": 1,
        "investor": 1
      },
      "d": {
        "indifferent": 4,
        "spender": 2,
        "saver": 2
      },
      "sd": {
        "indifferent": 8
      }
    },
    "spectrum_points": {
      "sa": [4, -8],
      "a": [2, -4],
      "d": [-2, 4],
      "sd": [-4, 8]
    }
  },
  {
    "id": 8,
    "value": "It is important to me that others view me as financially successful.",
    "points": {
      "sa": {
        "compulsive": 8
      },
      "a": {
        "compulsive": 4,
        "shopper": 2,
        "spender": 2
      },
      "n": {
        "compulsive": 2,
        "gambler": 2,
        "debtor": 1,
        "spender": 1,
        "shopper": 1,
        "indifferent": 1
      },
      "d": {
        "gambler": 4,
        "indifferent": 2,
        "debtor": 2
      },
      "sd": {
        "gambler": 8
      }
    },
    "spectrum_points": {
      "sa": [8, -8],
      "a": [4, -4],
      "d": [-4, 4],
      "sd": [-8, 8]
    }
  },
  {
    "id": 9,
    "value": "I avoid looking at my finances because it makes me uncomfortable to see how much money is leaving my account.",
    "points": {
      "sa": {
        "debtor": 8
      },
      "a": {
        "debtor": 4,
        "gambler": 2,
        "shopper": 2
      },
      "n": {
        "debtor": 2,
        "investor": 2,
        "gambler": 1,
        "saver": 1,
        "shopper": 1,
        "compulsive": 1
      },
      "d": {
        "investor": 4,
        "saver": 2,
        "compulsive": 2
      },
      "sd": {
        "investor": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 10,
    "value": "My savings plan is to simply avoid spending money whenever possible.",
    "points": {
      "sa": {
        "debtor": 8
      },
      "a": {
        "debtor": 4,
        "saver": 2,
        "indifferent": 2
      },
      "n": {
        "debtor": 2,
        "shopper": 2,
        "indifferent": 1,
        "saver": 1,
        "spender": 1,
        "gambler": 1
      },
      "d": {
        "shopper": 4,
        "spender": 2,
        "gambler": 2
      },
      "sd": {
        "shopper": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 4],
      "sd": [8, 8]
    }
  },
  {
    "id": 11,
    "value": "I don't live to work; I work to live.",
    "points": {
      "sa": {
        "indifferent": 8
      },
      "a": {
        "indifferent": 4,
        "debtor": 2,
        "shopper": 2
      },
      "n": {
        "indifferent": 2,
        "compulsive": 2,
        "saver": 1,
        "investor": 1,
        "debtor": 1,
        "shopper": 1
      },
      "d": {
        "compulsive": 4,
        "saver": 2,
        "investor": 2
      },
      "sd": {
        "compulsive": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 12,
    "value": "Money is just a tool that enables me to live and have experiences, not a measurement of my personal success.",
    "points": {
      "sa": {
        "indifferent": 8
      },
      "a": {
        "indifferent": 4,
        "gambler": 2,
        "investor": 2
      },
      "n": {
        "indifferent": 2,
        "saver": 2,
        "gambler": 1,
        "investor": 1,
        "spender": 1,
        "compulsive": 1
      },
      "d": {
        "saver": 4,
        "spender": 2,
        "compulsive": 2
      },
      "sd": {
        "saver": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -4],
      "a": [-4, -2],
      "d": [4, 2],
      "sd": [8, 4]
    }
  },
  {
    "id": 13,
    "value": "I stay calm and don’t make impulsive decisions when faced with financial setbacks.",
    "points": {
      "sa": {
        "investor": 8
      },
      "a": {
        "investor": 4,
        "compulsive": 2,
        "indifferent": 2
      },
      "n": {
        "investor": 2,
        "gambler": 2,
        "compulsive": 1,
        "indifferent": 1,
        "debtor": 1,
        "shopper": 1
      },
      "d": {
        "gambler": 4,
        "shopper": 2,
        "debtor": 2
      },
      "sd": {
        "gambler": 8
      }
    },
    "spectrum_points": {
      "sa": [8, 8],
      "a": [4, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 14,
    "value": "I know money comes and goes, so I make logical adjustments to my spending habits as needed.",
    "points": {
      "sa": {
        "investor": 8
      },
      "a": {
        "investor": 4,
        "saver": 2,
        "indifferent": 2
      },
      "n": {
        "investor": 2,
        "spender": 2,
        "saver": 1,
        "indifferent": 1,
        "debtor": 1,
        "shopper": 1
      },
      "d": {
        "spender": 4,
        "shopper": 2,
        "debtor": 2
      },
      "sd": {
        "spender": 8
      }
    },
    "spectrum_points": {
      "sa": [4, 8],
      "a": [2, 4],
      "d": [-4, -4],
      "sd": [-8, -8]
    }
  },
  {
    "id": 15,
    "value": "When I lose money, it really gets me down and messes with my emotions and/or thoughts. I feel the urge to bounce back fast from these losses, not just for my money but for my mental health too.",
    "points": {
      "sa": {
        "gambler": 8
      },
      "a": {
        "gambler": 4,
        "saver": 2,
        "spender": 2
      },
      "n": {
        "gambler": 2,
        "shopper": 2,
        "saver": 1,
        "spender": 1,
        "indifferent": 1,
        "compulsive": 1
      },
      "d": {
        "shopper": 4,
        "indifferent": 2,
        "compulsive": 2
      },
      "sd": {
        "shopper": 8
      }
    },
    "spectrum_points": {
      "sa": [-8, -8],
      "a": [-4, -4],
      "d": [4, 2],
      "sd": [8, 4]
    }
  },
  {
    "id": 16,
    "value": "I’m willing to put a lot of money in risky investments because higher risk means higher rewards.",
    "points": {
      "sa": {
        "gambler": 8
      },
      "a": {
        "gambler": 4,
        "investor": 2,
        "spender": 2
      },
      "n": {
        "gambler": 2,
        "debtor": 2,
        "investor": 1,
        "spender": 1,
        "shopper": 1,
        "compulsive": 1
      },
      "d": {
        "debtor": 4,
        "shopper": 2,
        "compulsive": 2
      },
      "sd": {
        "debtor": 8
      }
    },
    "spectrum_points": {
      "sa": [-4, -8],
      "a": [-2, -4],
      "d": [4, 2],
      "sd": [8, 4]
    }
  }
];
