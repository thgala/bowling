import { INIT_GAMEPLAY, ROLL_STARTED, ROLL_STOPED } from './actionTypes'
import {
  activeIndex as activeIndexSelector,
  activeRollIndex as activeRollIndexSelector,
  active as activeSelector,
  list as listSelector,
} from './selectors'
import { getRandomInt, arrayFromNumber } from './helpers'
import { TOTAL_FRAMES } from './constants'

export function init(playerList) {
  return {
    type: INIT_GAMEPLAY,
    playerList,
    framesNumberList: arrayFromNumber(TOTAL_FRAMES).map((f, i) => i + 1),
  }
}

export function rollTheBall() {
  return (dispatch, getState) => {
    dispatch({ type: ROLL_STARTED })
    setTimeout(() => {
      dispatch({ type: ROLL_STOPED })
    }, 3000)
  }
}

export function updateStatus() {
  return (dispatch, getState) => {
    // const activeIndex = activeIndexSelector( getState() )
    // const activeRollIndex = activeRollIndexSelector( getState() )
    // const active = activeSelector( getState() )
    // const list = listSelector( getState() )

    // function sumOfBallsInFrame() {
    //   return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
    // }

    // function spareBonus() {
    //   return self.rolls[frameIndex + 2];
    // }

    // function strikeBonus() {
    //   return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
    // }

    // function isStrike() {
    //   return self.rolls[frameIndex] === 10;
    // }

    // function isSpare() {
    //   return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10;
    // }

    // for (var frame = 0; frame < 10; frame++) {
    //   if (isStrike()) {
    //     score += 10 + strikeBonus();
    //     frameIndex++;
    //   } else if (isSpare()) {
    //     score += 10 + spareBonus();
    //     frameIndex += 2;
    //   } else {
    //     score += sumOfBallsInFrame();
    //     frameIndex += 2;
    //   }
    // }
    // return score;

    // dispatch({
    //   type: ROLL_FINISHED,
    //   score: ,
    //   status: ,
    // })
  }
}
