import test from 'node:test';
import assert from 'node:assert/strict';
import {
  STUDENT_SITUATIONS,
  WHAT_DEROTE_OFFERS,
  toggleResonance,
  calculateResonanceSummary
} from './situations';

test('STUDENT_SITUATIONS contains exactly 10 editorial problem cards', () => {
  assert.equal(STUDENT_SITUATIONS.length, 10);
  
  for (const item of STUDENT_SITUATIONS) {
    assert.ok(item.id.length > 0, 'id should not be empty');
    assert.ok(item.heading.length > 0, 'heading should not be empty');
    assert.ok(item.firstPersonQuote.length > 0, 'first person quote should not be empty');
    assert.ok(item.category.length > 0, 'category should not be empty');
    assert.ok(item.illustration.length > 0, 'illustration should not be empty');
    assert.ok(item.reflectionDetail.length > 0, 'reflection detail should not be empty');
  }

  const headings = STUDENT_SITUATIONS.map(s => s.heading);
  assert.ok(headings.includes('Family expectations'));
  assert.ok(headings.includes('Career confusion'));
  assert.ok(headings.includes('Lost motivation'));
  assert.ok(headings.includes('Finding my strengths'));
  assert.ok(headings.includes('Feeling left behind'));
  assert.ok(headings.includes('My voice, my choices'));
  assert.ok(headings.includes('Struggling to concentrate'));
  assert.ok(headings.includes('Afraid of disappointing others'));
  assert.ok(headings.includes('Studying just for marks'));
  assert.ok(headings.includes('Unsure what comes next'));
});

test('toggleResonance toggles IDs cleanly', () => {
  let list: string[] = [];
  list = toggleResonance(list, 'family-expectations');
  assert.deepEqual(list, ['family-expectations']);

  list = toggleResonance(list, 'career-confusion');
  assert.deepEqual(list, ['family-expectations', 'career-confusion']);

  list = toggleResonance(list, 'family-expectations');
  assert.deepEqual(list, ['career-confusion']);
});

test('calculateResonanceSummary handles empty and active states', () => {
  const empty = calculateResonanceSummary([]);
  assert.equal(empty.count, 0);

  const active = calculateResonanceSummary(['family-expectations', 'afraid-disappointing']);
  assert.equal(active.count, 2);
  assert.ok(active.message.length > 0);
});
