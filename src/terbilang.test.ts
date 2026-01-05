import { describe, it, expect } from 'vitest'
import { terbilang } from './terbilang'

describe('terbilang', () => {
  // Test basic numbers (0-11)
  it('should handle basic numbers correctly', () => {
    expect(terbilang(0)).toBe('Nol')
    expect(terbilang(1)).toBe('Satu')
    expect(terbilang(5)).toBe('Lima')
    expect(terbilang(10)).toBe('Sepuluh')
    expect(terbilang(11)).toBe('Sebelas')
  })

  // Test teens (12-19)
  it('should handle teen numbers correctly', () => {
    expect(terbilang(12)).toBe('Dua Belas')
    expect(terbilang(15)).toBe('Lima Belas')
    expect(terbilang(19)).toBe('Sembilan Belas')
  })

  // Test tens (20-99)
  it('should handle tens correctly', () => {
    expect(terbilang(20)).toBe('Dua Puluh')
    expect(terbilang(45)).toBe('Empat Puluh Lima')
    expect(terbilang(90)).toBe('Sembilan Puluh')
    expect(terbilang(99)).toBe('Sembilan Puluh Sembilan')
  })

  // Test hundreds (100-999)
  it('should handle hundreds correctly', () => {
    expect(terbilang(100)).toBe('Seratus')
    expect(terbilang(101)).toBe('Seratus Satu')
    expect(terbilang(111)).toBe('Seratus Sebelas')
    expect(terbilang(345)).toBe('Tiga Ratus Empat Puluh Lima')
    expect(terbilang(999)).toBe('Sembilan Ratus Sembilan Puluh Sembilan')
  })

  // Test thousands (1000-999999)
  it('should handle thousands correctly', () => {
    expect(terbilang(1000)).toBe('Seribu')
    expect(terbilang(1001)).toBe('Seribu Satu')
    expect(terbilang(2000)).toBe('Dua Ribu')
    expect(terbilang(2001)).toBe('Dua Ribu Satu')
    expect(terbilang(3456)).toBe('Tiga Ribu Empat Ratus Lima Puluh Enam')
    expect(terbilang(11000)).toBe('Sebelas Ribu')
    expect(terbilang(999999)).toBe('Sembilan Ratus Sembilan Puluh Sembilan Ribu Sembilan Ratus Sembilan Puluh Sembilan')
  })

  // Test millions
  it('should handle millions correctly', () => {
    expect(terbilang(1000000)).toBe('Satu Juta')
    expect(terbilang(1000001)).toBe('Satu Juta Satu')
    expect(terbilang(1234567)).toBe('Satu Juta Dua Ratus Tiga Puluh Empat Ribu Lima Ratus Enam Puluh Tujuh')
  })

  // Test billions
  it('should handle billions correctly', () => {
    expect(terbilang(1000000000)).toBe('Satu Milyar')
    expect(terbilang(1234567890)).toBe('Satu Milyar Dua Ratus Tiga Puluh Empat Juta Lima Ratus Enam Puluh Tujuh Ribu Delapan Ratus Sembilan Puluh')
  })

  // Test edge cases
  it('should handle edge cases correctly', () => {
    expect(terbilang(-1)).toBe('Negatif Satu')
    expect(terbilang(-100)).toBe('Negatif Seratus')
    expect(terbilang(NaN)).toBe('')
    expect(terbilang(Infinity)).toBe('')
  })

  // Test non-integer inputs
  it('should throw error for non-integer inputs', () => {
    expect(() => terbilang(3.5)).toThrow('terbilang only accepts integer numbers')
    expect(() => terbilang(123.45)).toThrow('terbilang only accepts integer numbers')
    expect(() => terbilang(-3.5)).toThrow('terbilang only accepts integer numbers')
  })

  // Test numbers beyond Kuadriliun
  it('should throw error for numbers beyond Kuadriliun', () => {
    expect(() => terbilang(10 ** 18)).toThrow('terbilang only supports numbers up to 999 Kuadriliun')
    expect(() => terbilang(10 ** 20)).toThrow('terbilang only supports numbers up to 999 Kuadriliun')
  })
})