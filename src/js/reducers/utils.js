import BlockTypes from '../constants/BlockTypes';
import { List } from "immutable";
import {WIDTH, HEIGHT} from '../constants/Settings';

export const isFinish = (blocks) =>
  List(blocks).filter((b) => b.id === 0 && b.x === 1 && b.y === 0).count() > 0

export const moveLeft = (block) => ({ ...block, x: block.x - 1 });
export const moveRight = (block) => ({ ...block, x: block.x + 1 });
export const moveTop = (block) => ({ ...block, y: block.y - 1 });
export const moveBottom = (block) => ({ ...block, y: block.y + 1 });

const crashPointBlock = (point, block) =>
  List(BlockTypes[block.type].items).filter((i) => point.x === i.x + block.x && point.y === i.y + block.y).count() > 0

const crashBlockBlock = (block1, block2) =>
  List(BlockTypes[block1.type].items).filter((i) => crashPointBlock({
    x: i.x + block1.x,
    y: i.y + block1.y
  }, block2)).count() > 0

const crashBlockBlocks = (block, blocks) =>
  List(blocks).filter((b) => crashBlockBlock(block, b)).count() > 0

export const addPossibleMoves = (blocks) => blocks.map((block) => {
  const filterBlocks = List(blocks).filter((b) => b.id !== block.id);
  const getMost = (func) => List(BlockTypes[block.type].items).maxBy(func);

  const mostBottom = getMost((i) => i.y).y + block.y;
  const mostTop = getMost((i) => -i.y).y + block.y;
  const mostRight = getMost((i) => i.x).x + block.x;
  const mostLeft = getMost((i) => -i.x).x + block.x;

  const crashTop = crashBlockBlocks(moveTop(block), filterBlocks);
  const crashBottom = crashBlockBlocks(moveBottom(block), filterBlocks);
  const crashLeft = crashBlockBlocks(moveLeft(block), filterBlocks);
  const crashRight = crashBlockBlocks(moveRight(block), filterBlocks);

  return {
    ...block,
    possibleMoves: {
      top: !crashTop && mostTop > 0 && !(mostTop === 1 && mostLeft === 0) && !(mostTop === 1 && mostRight === WIDTH - 1),
      bottom: !crashBottom && mostBottom < HEIGHT - 1,
      left: !crashLeft && mostLeft > 0 && !(mostTop === 0 && mostLeft === 1),
      right: !crashRight && mostRight < WIDTH - 1 && !(mostTop === 0 && mostRight === WIDTH - 2)
    }
  };
});
