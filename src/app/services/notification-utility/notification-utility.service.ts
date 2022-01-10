import { Injectable } from '@angular/core';
import { InvestmentNotification } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NotificationUtilityService {

  constructor() { }

  calculateNotification(totalInvestment: number, totalShares: number, currentPrice: number, symbol: string): InvestmentNotification {
      let currentValue = currentPrice * totalShares

      let diff = currentValue - totalInvestment

      let notificationResult = {
        message: '',
        diff: 0

      }
      if (diff < 0) {
        notificationResult = this.negativeNotification(diff)
      }
      else {
        notificationResult = this.positiveNotification(diff)
      }

      let notication : InvestmentNotification = {
        symbol: symbol,
        message: notificationResult.message,
        diff: notificationResult.diff
      }

      return notication;
  }


  positiveNotification(diff: number): any {
    switch (true) {
      case diff < 1000: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 900: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 800: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 700: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 600: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 500: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 400: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 300: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 200: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 100: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      case diff < 50: {
        return {
          message: `gain of `,
          diff: diff
        }
      }
      default:
        return ''

    }
  }

  negativeNotification(diff: number): any {
    switch (true) {
      case diff > -100: {
        console.log('diff > -100')
        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -200: {
        console.log('diff > -200')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -300: {
        console.log('diff > -300')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -400: {
        console.log('diff > -400')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -500: {
        console.log('diff > -500')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -600: {
        console.log('diff > -600')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -700: {
        console.log('diff > -700')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -800: {
        console.log('diff > -800')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -900: {
        console.log('diff > -900')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -1000: {
        console.log('diff > -1000')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -1100: {
        console.log('diff > -1000')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -1200: {
        console.log('diff > -1000')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -1300: {
        console.log('diff > -1000')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -1400: {
        console.log('diff > -1000')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -1500: {
        console.log('diff > -1000')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      case diff > -1600: {
        console.log('diff > -1000')

        return {
          message: `loss of `,
          diff: diff
        }
      }
      default:
        return ''
    }
  }
}
