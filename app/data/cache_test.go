package data

import "testing"

func Test_generateToken(t *testing.T) {
	type args struct {
		m string
	}
	tests := []struct {
		name string
		args args
	}{
		{
			name: "normal test case 1",
			args: args{
				m: "sdasdf",
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := generateToken(tt.args.m); len(got) != 32 {
				t.Error("Length not 32")
			}
		})
	}
}
