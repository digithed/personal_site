export const code = `
def is_divisable_by_two(result):
    return len([x for x in result if x % 2  == 0]) == len(result)

def is_palindrome(seq):
    return seq == seq[::-1]

def find_palindrome(numbers, target_sum, count, last_index, seq=[]):
    if count == 0:
        if sum(seq) == target_sum and is_palindrome(seq):
            return seq
        return None

    for idx in range(last_index + 1, len(numbers)):
            result = find_palindrome(numbers, target_sum, count - 1, idx, seq + [numbers[idx]])
            if result is not None and is_divisable_by_two(result):
                return result

    return None

def solution(numbers):
    return find_palindrome(numbers, 18, 5, -1, [])

print(solution([1, 2, 4, 7, 8, 9, 6, 5, 4, 7, 6, 3, 1, 4, 6, 5, 2]))
`